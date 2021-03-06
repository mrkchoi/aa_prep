class BandsController < ApplicationController
  before_action :authenticate_user

  def index
    @bands = Band.all.order('bands.created_at ASC')
    render :index
  end
  
  def new
    @band = Band.new
    render :new
  end

  def create
    band = Band.new(band_params)

    if band.save
      redirect_to bands_url
    else
      flash.now[:errors] = ['Invalid band name']
      render :new
    end

  end

  def edit
    @band = Band.find_by(id: params[:id])
    render :edit
  end

  def update
    band = Band.find_by(id: params[:band][:id])
    if !band.update_attributes(band_params)
      flash[:band_edit_error] = ["Invalid band name. Edit not saved."]
    end
    
    redirect_to bands_url
  end

  def show
    @band = Band.find_by(id: params[:id])
    render :show
  end

  def destroy
    @band = Band.find_by(id: params[:id])
    @band.destroy
    redirect_to bands_url
  end

  private

  def band_params
    params.require(:band).permit(:name)
  end
end