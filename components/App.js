App = React.createClass({
    
    getInitialState() {
        return {
            loading: false,
            searchingText: '',
            gif: {}
        };
    },
    
    handleSearch: function(searchingText) {
        this.setState({
            loading: true
        });
        this.getGif(searchingText).then(gif => {
            this.setState({
                loading: false,
                searchingText,
                gif
            });
        });
    },
    
    getGif: function(searchingText) {
        return new Promise ((resolve, reject) => {
            const url = 'https://api.giphy.com' + '/v1/gifs/random?api_key=' + '8r8u8bACBZn3RNjQqWp8cDrzdKwuCykb' + '&tag=' + searchingText;  
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText).data;
                    let gif = {
                        url: data.fixed_width_downsampled_url,
                        sourceUrl: data.url
                    };
                    resolve(gif);
                }
            };
            xhr.send();
        });
    },
    
    render: function() {
        
        const styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
            fontSize: '40px',
        };
        
        return (
            <div style={styles}>
                <h1>Wyszukiwarka GIFów!</h1>
                <p>Znajdz gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
                <Gif 
                    loading={this.state.loading}
                    url={this.state.gif.url}
                    sourceUrl={this.state.gif.sourceUrl}
                />
            </div>
        );
    }
});
