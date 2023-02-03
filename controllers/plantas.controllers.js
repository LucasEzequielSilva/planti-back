import Plantas from '../models/plantas.js'

const controllers = {
    read: async (req, res) =>{
        try {
            const plantas = await Plantas.find();
            return res.status(200).json({
                success: true,
                data: plantas,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
    }
}
}
export default controllers