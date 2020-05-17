import React from 'react'
import { } from 'react-native'
import FilmListVu from './FilmListVu'
import { getBestFilmsFromApi } from '../API/TMDBApi'

class FilmVu extends React.Component {
  constructor(props) {
    super(props)
    this.page = 0
    this.totalPages = 0
    this.state = {
      filmsVus: [],
      isLoading: false
    }
    this._loadFilms = this._loadFilms.bind(this)
  }

  componentDidMount() {
    this._loadFilms()
  }

  _loadFilms() {
    this.setState({ isLoading: true })
    getBestFilmsFromApi(this.page+1).then(data => {
        this.page = data.page
        this.totalPages = data.total_pages
        this.setState({
          filmsVus: [ ...this.state.filmsVus, ...data.results ],
          isLoading: false
        })
    })
  }

  render() {
    return (
      <FilmListVu
        films={this.state.filmsVus}
        navigation={this.props.navigation}
        loadFilms={this._loadFilms}
        page={this.page}
        totalPages={this.totalPages}
        favoriteList={false}
      />
    )
  }
}

export default FilmVu
