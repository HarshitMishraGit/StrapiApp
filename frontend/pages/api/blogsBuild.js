// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log('webhook received', req.body)
  if (req.body.model === 'blog') { 
    const updatedEntry = req.body.entry.slug;
    // console.log('updatedEntry', updatedEntry)
    res.revalidate(`/Blogs/${updatedEntry}`);
  } 

    res.status(500).json({ message: 'Something went wrong!' })
  }
  