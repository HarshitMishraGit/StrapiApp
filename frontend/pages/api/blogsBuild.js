// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // console.log('webhook received', req.body)
  if (req.body.event === 'entry.update') { 
    const updatedEntry = req.body.entry.slug;
    console.log('updatedEntry', updatedEntry)
    res.revalidate(`/Blogs/${updatedEntry}`);
  }
    res.status(200).json({ name: 'John Doe' })
  }
  