import React, { useEffect, useState } from 'react';
import Article from './Article';
import './Article.css';

// Firestore'un eklenmesi
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const ArticlesSection = () => {
  const [xeberler, setXeberler] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "articles"));
        const articlesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setXeberler(articlesList);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  console.log(xeberler);

  return (
    <>
      <div className='latest row articleSection'>
        <div className="col-12 col-md-6">
          <Article meqaleninBasligi='The truth about ReactJS' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715873926/ae3ca22b25f568f36e643d33390ffcb1_n5j1qm.jpg' />
        </div>
        <div className="col-12 col-md-6">
          <Article meqaleninBasligi='How to solve an unsolvable conflict' meqaleninSekli='https://res.cloudinary.com/dlsupk9sb/image/upload/v1715874130/f8d17f1b085a5fe275e1ebadd2226b67_uw2ji6.png' />
        </div>
      </div>
      <div className="articles row">
        {xeberler.map((birXeber) => (
          <div className="col-12 col-md-6 col-lg-4" key={birXeber.id}>
            <Article meqaleninBasligi={birXeber.basliq} meqaleninSekli={birXeber.shekil} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ArticlesSection;
