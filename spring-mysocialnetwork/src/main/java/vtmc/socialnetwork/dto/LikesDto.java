package vtmc.socialnetwork.dto;

public class LikesDto {
	
	private int nrOfLikes;
	
	public LikesDto(){}
	
	public void setLikes(int nrOfLikes) {
		this.nrOfLikes = nrOfLikes;
	} 
	
	public int getLikes() {
		return this.nrOfLikes;
	}
	
}
