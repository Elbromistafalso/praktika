package vtmc.socialnetwork.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import vtmc.socialnetwork.domain.Comment;

public interface CommentDao extends JpaRepository<Comment, Long> {
	

}
