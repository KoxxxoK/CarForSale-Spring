package com.example.carsforsell.config;

import com.example.carsforsell.models.Customers;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collectors;


public class MyUserDetails implements UserDetails {
    private Customers customers;
    public MyUserDetails(Customers customers){
        this.customers = customers;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
//            return Arrays.stream(customers.getRole().split(""))
//                    .map(SimpleGrantedAuthority::new)
//                    .collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return customers.getPassword();
    }

    @Override
    public String getUsername() {
        return customers.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
