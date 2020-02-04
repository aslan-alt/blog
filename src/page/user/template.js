import blog from '@/api/blog.js'
export default {
    data() {
        return {
            blogs:[],
            user:{},
            page:1,
            total:0
        }
    },
    created(){
        console.log('xxx')
        this.page = this.$route.query.page || 1
        this.userId = this.$route.params.userId
        console.log(this.userId)
        blog.getBlogsByUserId(this.userId,{page:this.page})
        .then(res=>{
            console.log(res)
            this.page = res.page
            this.total = res.total
            this.blogs = res.data
            if(res.data.length>0){
                this.user = res.data[0].user
            }
        })
    },
    methods:{
        splitDate(dataStr){
            
            let dataObj = typeof dataStr === 'object'?dataStr:new Date(dataStr)
            return {
                date:dataObj.getDate(),
                month:dataObj.getMonth()+1,
                year:dataObj.getFullYear()
            }
        },
        onPageChange(newPage){
            blog.getBlogsByUserId(this.userId,{page:newPage})
            .then(res=>{
                console.log(res)
                this.page = res.page
                this.total = res.total
                this.blogs = res.data
                if(res.data.length>0){
                    this.user = res.data[0].user
                    this.$router.push({path:`/user/${this.userId}`,query:{page:newPage}})
                    
                }

            })
        }
    }

};