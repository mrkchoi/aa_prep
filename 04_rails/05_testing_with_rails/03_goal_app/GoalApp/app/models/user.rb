# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence:true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :username, uniqueness: true
  after_initialize :ensure_session_token

  has_many(
    :goals,
    class_name: 'Goal',
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :comments,
    as: :commentable
  )

  has_many(
    :authored_comments,
    class_name: 'Comment',
    foreign_key: :author_id,
    primary_key: :id
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
