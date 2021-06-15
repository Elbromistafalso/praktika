package vtmc.socialnetwork.dto;

public class CommentDto {
	
	private Long id;
	private String userName;
	private byte[] userPhoto;
	private String text;
	
	public CommentDto() {}
	
	

	public CommentDto(Long id, String userName, byte[] userPhoto, String text) {
		super();
		this.id = id;
		this.userName = userName;
		this.userPhoto = userPhoto;
		this.text = text;
	}
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
