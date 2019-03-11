
import React from 'react';
import FilterPanel from '../projects/FilterPanel.jsx';
import Photo from '../projects/Photo.jsx';
import PHOTODATA from '../projects/PHOTO.js';
import s from '../projects/Projects.module.css';

{/*Create a final collection of photos in photoGallery*/ }

class PhotoGallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

            displayedCategories: PHOTODATA,
            active: false
        }
    }

    toggleActive = () => {
        this.setState({
            active: !this.state.active
        });
    }

    selectCategory = (element) => {
        console.log('element is: ' + element);
        let categoryName = element.toLowerCase();
        let displayedCategories = PHOTODATA.filter((el) => {

            let searchValue = el.category.toLowerCase();
            return searchValue.indexOf(categoryName) !== -1;
        });

        this.setState({
            displayedCategories: displayedCategories

        });

    }

    resetFilter = (element) => {
        this.setState({
            displayedCategories: PHOTODATA
        });
    }

    render() {

        let categoryToSelect = this.selectCategory;
        let getUniqueCategories = [];
        PHOTODATA.forEach((el) => {
            if (getUniqueCategories.indexOf(el.category) === -1) getUniqueCategories.push(el.category);
        })

        return (
            <div className="overlay-photogallery">
                <div id={s.menu}>
                    <ul>
                        <li className={s.imageHeading} onClick={this.resetFilter}> ALL </li>
                        {
                            getUniqueCategories.map((el, i) => {
                                let boundClick = categoryToSelect.bind(null, el);
                                return (
                                    <FilterPanel
                                        id={s.menu}
                                        onClick={boundClick}
                                        category={el}
                                        key={i}
                                    />
                                )
                            })

                        }

                    </ul>

                    {/* <li className={s.imageHeading} onClick={this.resetFilter}> All </li> */}
                </div>
                <div className={s.imgWrapper}>
                    {

                        this.state.displayedCategories.map((el) => {
                            return (
                                <Photo
                                    key={el.id}
                                    imageUrl={el.imageUrl}
                                    category={el.category}
                                    info={el.info}
                                />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
};

export default PhotoGallery;
