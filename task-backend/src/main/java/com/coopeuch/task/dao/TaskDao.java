/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.dao;

import com.coopeuch.task.model.Task;
import org.springframework.data.domain.Page;

/**
 *
 * @author romerd
 */
public interface TaskDao {
    Task get(Long id);
    Task create(Task task);
    Task update(Long id, Task task);
    void delete(Long id);
    Page<Task> list(Integer page, Integer limit);    
}
