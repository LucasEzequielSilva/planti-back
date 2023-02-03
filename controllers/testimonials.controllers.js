import Testimonials from '../models/testimonials.js'

const controllers = {
    create: async(req, res)  => {
		let {data} = req.body
        try{
            let testimonials = await Testimonials.create({
                name:data.name,
                email:data.email,
                photo:data.photo,
                argument:data.argument
            })
            res.status(200).json({
                data:testimonials,
                response:"testimonio creado!",
                status:200
            })
        }catch(err){
            console.log(err)
        }
		
    }
}
export default controllers