package vtmc.socialnetwork.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vtmc.socialnetwork.domain.Post;

@Repository
public interface PostDao extends JpaRepository<Post, Long> {

}
