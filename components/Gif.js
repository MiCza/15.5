var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';

const styles = {
    minHeight: '320px',
    maxWidth: '1200px',
    border: '1px solid black',
    boxShadow: 'inset 0 0 10px black',
    backgroundColor: 'white',
    borderRadius: '5px',
    margin: '0.5em auto'
};

const imgStyles = {
    width: '100%',
    maxWidth: '380px',
    maxHeight: '450px',
    margin: '70px auto'
};

Gif = React.createClass({
    
    getUrl: function() {
        return this.props.sourceUrl || GIPHY_LOADING_URL;
    },
    
    render: function() {
        const url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;
        
        return (
            <div style={styles}>
                <a href={this.getUrl()} title='view this on giphy' target='new'>
                    <img id='gif' src={url} style={imgStyles}/>
                </a>
            </div>
        );
    }
});
