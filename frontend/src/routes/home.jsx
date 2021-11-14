import React, {useState } from 'react';
import Cards from '../components/card_section/cards';

const cards_details = [
  {
      "id": 1,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 2,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 3,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 4,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 5,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 6,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 7,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
      "id": 8,
      "header": "Header",
      "title": "Dark card title",
      "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
]

function Home(props) {
    const [CardDetails, setCardDetails] = useState( 
        [
          {
              "id": 1,
              "header": "Header",
              "title": "Dark card title",
              "text": "Some quick example text to build on the card title and make up the bulk of the card's content.",
          },
        ]
      );
    

    React.useEffect(() => {
        setCardDetails(cards_details);
      
    }, []);


    return (
        <>
        <Cards cards_details={CardDetails} />
        </>
    )

}

export default Home;