const Router = require('koa-router')
const router = Router({
  prefix: '/category'
})

router.get('/list',async(ctx)=>{
  ctx.body={list:['北京','天津']}
})

module.exports = router
