var getDate = (req,res)=>{
    res.status(200).json({date:new Date()})
}
module.exports= {
    getDate
}