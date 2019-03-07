import React from 'react';

class CategoryFilter extends React.Component {
constructor(props) {
    super(props);
    // this.state={
    //     photos: state.photos.items
    // }
}

handleChange = (category) => { this.props.onChange(category) }
render() {
const { photos } = this.props;
const categoryArray = [];
photos.map(photo => {
    photo.category.map(category => {
        if(categoryArray.indexOf(category) < 0) {
            categoryArray.push(category) 
        }
    })
})
const catArr = categoryArray.map(category => {
     <div>
    // key={photos.category.id}
    onClick={(() => this.handleChange(category))}>
    {category}
    </div>
});
    return (
        <div className="categoryFilter">
            <p>Photo Gallery</p>
        
            {catArr}
            </div>
    )
}
 
}

export default CategoryFilter;