import blog from '@/api/blog.js'
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0
        }
    },
    computed: {
        ...mapGetters(['user']),
    },
    created() {
        this.page = (this.$route.query.page) || 1
        blog.getBlogsByUserId(this.user.id, { page: this.page })
            .then(res => {
                this.page = res.page
                this.total = res.total
                this.blogs = res.data
            })
    },
    methods: {
        async onDelete(blogId) {
            await this.$confirm('真的要删除吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            await blog.deleteBlog({ blogId })
            this.$message.success('删除成功!')
           this.blogs = this.blogs.filter(blog=>blog.id!=blogId)
        },


        splitDate(dataStr) {
            let dataObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
            return {
                date: dataObj.getDate(),
                month: dataObj.getMonth() + 1,
                year: dataObj.getFullYear()
            }
        },
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.user.id, { page: newPage })
                .then(res => {
                    console.log(res)
                    this.page = res.page
                    this.total = res.total
                    this.blogs = res.data
                    if (res.data.length > 0) {
                        this.$router.push({ path: "/my", query: { page: newPage } })
                    }

                })
        }
    }

};