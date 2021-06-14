package vtmc.socialnetwork.dto;

public class CommentDto {
	
	private String userName;
	private byte[] userPhoto;
	private String text;
	
	public CommentDto() {}
	
	

	public CommentDto(String userName, byte[] userPhoto, String text) {
		super();
		this.userName = userName;
		this.userPhoto = userPhoto;
		this.text = text;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public byte[] getUserPhoto() {
		return userPhoto;
	}

	public void setUserPhoto(byte[] userPhoto) {
		this.userPhoto = userPhoto;
	}
	
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}
	
}
