import { Fragment, useCallback, useState } from "react";
import axios from 'axios'
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import NewsPage from "./pages/NewsPage";
import { Route, Routes } from "react-router-dom";


function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => {
    setCategory(category);
  }, []);

  return (
    // <Fragment>
    //   <Categories category={category} onSelect={onSelect}/>
    //   <NewsList category={category}/>
    // </Fragment>

    // <Routes>
    //   <Route path="/about" element={<NewsPage/>}/>
    // </Routes>

    <Fragment>
      <Routes>
        {/* <Route path="/:category?" element={<NewsPage/>}/> */}
        <Route path="/" element={<NewsPage/>}/>
        <Route path="/:category" element={<NewsPage/>}/>
      </Routes>
    </Fragment>
  )
}

export default App;
