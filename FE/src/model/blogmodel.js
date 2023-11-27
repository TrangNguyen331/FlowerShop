class BlogModel {
    constructor(id, content, title, author, image, category, createdDate) {
        this.id = id;
        this.content = content;
        this.title = title;
        this.author = author;
        this.image = image;
        this.category = category;
        this.createdDate = createdDate;
    }

    getCreatedDate() {
        const dateObject = new Date(this.createdDate);

        // Format the date components
        const day = dateObject.getDate();
        const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(dateObject);
        const year = dateObject.getFullYear();

        const formattedDate = `${day} ${month}, ${year}`;
        return formattedDate;
    }

    getContentLimit() {
        return this.content.length > 90 ? this.content.slice(0, 90) + '...' : this.content
    }

}
export default BlogModel;