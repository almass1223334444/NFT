// In your custom metadata service
const express = require('express');
const app = express();
const port = 3000;

// Define metadata for NFTs
const nftMetadata = {
  0: { name: 'NFT #0', description: 'Description for NFT #0', image: 'https://example.com/image0.png' },
  1: { name: 'NFT #1', description: 'Description for NFT #1', image: 'https://example.com/image1.png' },
  // Add more NFT metadata as needed
};

app.get('/metadata/:tokenId', (req, res) => {
  const tokenId = parseInt(req.params.tokenId, 10);
  if (tokenId in nftMetadata) {
    res.json(nftMetadata[tokenId]);
  } else {
    res.status(404).json({ error: 'Metadata not found' });
  }
});

app.listen(port, () => {
  console.log(`Custom metadata service is running on port ${port}`);
});
