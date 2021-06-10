package vtmc.socialnetwork.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vtmc.socialnetwork.domain.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

	User findByUserName(String userName);
	User findByUserNameAndPassword(String username, String password);
}
