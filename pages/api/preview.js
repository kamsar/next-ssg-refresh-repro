export default async (req, res) => {
    if(req.query.preview === 'true') {
        res.setPreviewData({});
    } else {
        res.clearPreviewData();
    }
  
    res.end()
  }