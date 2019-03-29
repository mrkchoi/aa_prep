class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @books = Book.all

    render :index 
  end

  def show
    @book = Book.find_by(id: params[:id])

    if @book
      render :show
    else
      redirect_to :books
    end
  end

  def new
    @book = Book.new
    render :new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      # show user the book show page
      redirect_to book_url(@book)
    else
      # show user the new book form
      render :new
    end
  end

  def edit
    @book = Book.find_by(id: params[:id])
    render :edit
  end

  def update
    @book = Book.find_by(id: params[:id])

    if @book.update_attributes(book_params)
      redirect_to book_url(@book)
    else
      render :edit
    end
  end


  private

  def book_params
    params.require(:book).permit(:title, :author, :year, :category, :description)
  end
  
end


