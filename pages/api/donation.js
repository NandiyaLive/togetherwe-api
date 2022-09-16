const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const handler = (req, res) => {
  const d = new Date();

  const query = req.query;
  const { id } = query
  
  const donations = {
  "AEaTUnvneik": [
    {
      "DonationId": "41210449-d373-457a-a5ac-e978fa3e5042",
      "FundraisingItemId": "AEaTUnvneik",
      "Amount": 10
    }
  ],
  "3eOIKv495OU": [
    {
      "DonationId": "923e1941-dc54-43ad-9f98-56f39887b1a5",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "50cb2d47-9693-4f91-873f-cdb94ad71efa",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "3a22a7ba-e82a-432a-afa1-c890d8ac8cd6",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    },
    {
      "DonationId": "a5ce9548-ff7f-4b6f-9e0d-78f55e26ba92",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "8ad73f5c-1a36-48bc-ba4f-977ee1da4f0b",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "1170ead5-0fac-45d4-a8a6-83f76637d3b9",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "8af4ecb8-edd0-49a1-99cc-6908933d6d3c",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "edcd991d-069e-421d-bedf-82a767b2a9c1",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "20"
    },
    {
      "DonationId": "09d9faec-ec35-4aca-b2f5-6f642bf05f87",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    },
    {
      "DonationId": "f8e30143-b7ac-497e-8c14-937c569abd56",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "3e86a3ba-8ab3-4dd9-a1fd-3c2f049bea10",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "abaa917f-8640-418c-b25e-046c02a960b9",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "13b8a9a5-458d-4602-b0f5-64df8bb827b2",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    },
    {
      "DonationId": "1adc1bf3-993c-4e13-a375-d637e6cfc588",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "384a25e5-b7db-4248-b431-1254b93ecb03",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": 0
    },
    {
      "DonationId": "8bc9c9dc-93cb-4811-9211-4d9d6dda68dc",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "a410b1d2-a53d-4edf-ad4e-7f00dce194ca",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": 0
    },
    {
      "DonationId": "cff0b6c9-bd5b-4520-af1c-164debf45e83",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "08d13a16-87db-4bcf-a085-545957fc3dc0",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "7677fc9e-55c7-47ce-bf1b-2e20820977ad",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "102532e4-a67b-41e8-b10a-f2c1b7d0650f",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": 0
    },
    {
      "DonationId": "7b1bbc64-e041-498c-8558-d724910ed8e1",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    },
    {
      "DonationId": "97f11e72-857a-4e77-b313-9817f9d44f5e",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": 0
    },
    {
      "DonationId": "c758c4db-2310-4514-839c-7f5ac183480a",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "0443bd2d-196f-435a-a93b-dc8c971bc6b3",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    },
    {
      "DonationId": "75c91daf-0b8f-4998-9649-028941ce9aca",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "df4e8e65-c1c1-4302-9c32-6d58f3ffb49e",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "3b2f7ee1-3ec1-4935-97cd-2138afb58f02",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "10"
    },
    {
      "DonationId": "be6e6324-53b9-4158-88e8-5940269d04da",
      "FundraisingItemId": "3eOIKv495OU",
      "Amount": "500"
    }
  ],
  "Blf94-yY50g": [
    {
      "DonationId": "b3731070-6985-45cc-9ed7-7aff59db7ff4",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "75587bfc-6b58-4593-9b88-bc002ba9639a",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "0dad9ad4-c5a6-4800-b087-4fe7445c0271",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "1e987ac4-4985-403a-90bc-e0d38d658056",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "b0b8212d-9869-4dbb-bff5-0212bcc4433e",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "20"
    },
    {
      "DonationId": "58077543-ed35-47da-b0dc-a335d18a7b77",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "23466695-1171-4ac8-9641-78fdd9fec3c5",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": 0
    },
    {
      "DonationId": "dee1d5bc-30de-421b-bc5d-74b0b5d9b4dd",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "1000"
    },
    {
      "DonationId": "5bec1c2a-75ef-4e12-ada5-f24b4302080b",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": 0
    },
    {
      "DonationId": "3acb86d7-03c1-4dd7-a2e3-88af450b6e8a",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "500"
    },
    {
      "DonationId": "2cf0a385-b7d6-421a-b1b1-1394fee24c34",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "77861773-1131-4310-ade6-936ed0e31362",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "8873ad79-6c22-44a9-9e13-a76e193be186",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "1000"
    },
    {
      "DonationId": "b50011d8-3ffc-456d-bcdc-e271835de7fe",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "199563a4-0b01-4e15-847f-7ed484032837",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "20"
    },
    {
      "DonationId": "7dc48b43-f202-4580-ba91-b86e14b82571",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    },
    {
      "DonationId": "a93c146a-b87f-43f7-8a87-5d617dd8ee9b",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "20"
    },
    {
      "DonationId": "79cb196e-f24a-4d9d-ad33-96a23a94bdd9",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "20"
    },
    {
      "DonationId": "dc603f8d-f96e-48d8-ae7b-b6df825bc060",
      "FundraisingItemId": "Blf94-yY50g",
      "Amount": "10"
    }
  ],
  "TJxotQTUr8o": [
    {
      "DonationId": "4817e06b-58cd-4dd6-9e84-f87d13ee47c7",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "38c41e1a-2c3b-4939-90d0-0dbd5e20c35a",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "50"
    },
    {
      "DonationId": "767fa9ba-d332-42d1-8a71-43d491c75419",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "a8b2deb9-2d2c-4e83-8b2e-36f5be66cf7a",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "a5346697-afba-44f1-8ebd-37b00df6279f",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "500"
    },
    {
      "DonationId": "e9a9bc5b-ff71-4f47-ad45-e38535911149",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "a753662c-feb8-4213-8f08-5d2fc19601e0",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "886b9c50-82fa-4d11-b83d-729b6ad893a0",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "50"
    },
    {
      "DonationId": "87a7249a-bd21-4aef-970c-d91af4f990f3",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "100"
    },
    {
      "DonationId": "3417dfa6-1e3a-42f0-9fbf-9d5ec4184526",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "c68f011b-42a5-4822-9fa7-cfb35e98d679",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "ef541ad6-f4bc-4b32-8baf-9e9c3ebb5459",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "051550df-0497-4b06-bd76-dfba9c2d607a",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "d5dcc8cb-8b63-467b-b462-cb91f448e25f",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "d95fc5c4-abd7-4089-abb6-ab34124dadfc",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "6cc7db75-e2ad-4531-9ab0-0c7de0a43e55",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "4dbc7cf7-b3da-4672-a8f8-263efd973f1c",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "c6fca71f-c313-448c-a60e-61d80f2ee910",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "cc02257e-3252-4f9e-ac8d-fc975d2aa0f7",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "02e4b488-ddc3-4e76-9e9e-6431240aa843",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "a1facb4c-bda7-403b-85c9-25f5e323cb3e",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "221285be-0afc-4870-9f06-a8e4f769cb60",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "3bc5def1-4360-456a-bb15-be28e1724e46",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "7f16e161-d2f0-451f-8e59-1d14679a6334",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "00b18019-41b7-4c20-b463-bfeeec3d781b",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "d8db8d67-70ac-42ed-993c-e24ab3d6d246",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "7921da4f-657f-45b3-998d-732ba5d25576",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "68e0fcf6-c0a5-4386-bcee-73c241a6fd3b",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "07a2d8df-1236-4d3b-bab6-859f55ad1891",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "ea3a3f1b-a363-48cd-906f-cf439de3a274",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "c31dd04a-6bd6-49b0-b589-2c58758fd12a",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "6beceb44-d215-4a53-b59b-53f4c61211d7",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "957dd6c5-fffb-4706-a3bf-53392527054d",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "20"
    },
    {
      "DonationId": "d6425be4-39bc-4398-a0e6-f5b56f413754",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": 0
    },
    {
      "DonationId": "4e6f629c-6f68-4cab-87d6-6e081b9390b6",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "500"
    },
    {
      "DonationId": "dbb2063e-604c-4b2e-a201-642375abd827",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "77bfddc6-7a0d-47de-8eb3-ad9ccf31ac9b",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "b8799682-44a0-47a9-9c6c-f93b49aa7590",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    },
    {
      "DonationId": "4d27d710-f286-4f23-b5b6-25df40a5f596",
      "FundraisingItemId": "TJxotQTUr8o",
      "Amount": "10"
    }
  ],
  "iDCtsz-INHI": [
    {
      "DonationId": "c7233b5d-fbaf-45d4-b2f1-71c0432528c4",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "10"
    },
    {
      "DonationId": "cc35af0c-64b0-4228-97d7-cd99570c0e96",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "10"
    },
    {
      "DonationId": "985256a6-3e68-4ba5-a69c-073e3f823413",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "20"
    },
    {
      "DonationId": "acbeb8d1-d65b-4d10-b275-3f7f91cb9259",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "500"
    },
    {
      "DonationId": "49e1bfec-afe1-490d-a31f-6a1767cc8521",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "10"
    },
    {
      "DonationId": "9df7558c-c6c5-49f6-96f5-db1b5b9809b5",
      "FundraisingItemId": "iDCtsz-INHI",
      "Amount": "10"
    }
  ],
  "uaPaEM7MiQQ": [
    {
      "DonationId": "e80a192c-2449-445c-8e6a-18347744ddfc",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 50
    },
    {
      "DonationId": "6dc4edf2-85ef-41cf-a3e5-fd6a3bf30e78",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 10
    },
    {
      "DonationId": "16769e2f-ef34-4cab-af09-9acbb41c8783",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 500
    },
    {
      "DonationId": "030c59ff-3626-4209-9442-9b54ec48e83b",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 50
    },
    {
      "DonationId": "bb17868b-9869-45dc-b2b8-d4781731aad8",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 500
    },
    {
      "DonationId": "8345f4ea-b956-4c7a-90fe-2d886ba17bd2",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 10
    },
    {
      "DonationId": "4f3192c7-2cde-48c9-8116-6e4e127fe828",
      "FundraisingItemId": "uaPaEM7MiQQ",
      "Amount": 500
    }
  ]
}
  const data = donations[id]

  return res.status(200).json({ data });
};

module.exports = allowCors(handler);
