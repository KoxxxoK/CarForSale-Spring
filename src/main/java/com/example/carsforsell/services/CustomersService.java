package com.example.carsforsell.services;


import com.example.carsforsell.config.MyUserDetails;
import com.example.carsforsell.dao.CustomersRepository;
import com.example.carsforsell.models.Customers;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@NoArgsConstructor
public class CustomersService implements UserDetailsService {
    @Autowired
    private CustomersRepository customersRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try {
            Customers customers = customersRepository.findByEmail(username);
            if (customers == null) {
                throw new UsernameNotFoundException(username);
            }
            return new MyUserDetails(customers);
        }catch (Exception e){
            return null;
        }
    }
    public void addCustomer(Customers customers){
        customers.setPassword(customers.getPassword());
        customersRepository.save(customers);
    }
}
