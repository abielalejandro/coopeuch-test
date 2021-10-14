/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.utils;


import java.util.ArrayList;
import java.util.List;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;


/**
 *
 * @author rgarcia
 */

@Service
@Scope(value = ConfigurableBeanFactory.SCOPE_SINGLETON)
public class ConvertDTO {
    private ModelMapper modelMapper = new ModelMapper();
    public List get(List dtos, Class p)
    {
        List data = new ArrayList();
        for (Object dto: dtos) {
            data.add(create(dto, p));
        }
    	return data;
    }
    public Object create(Object o, Class p){        
        return modelMapper.map(o, p);
    }

}
