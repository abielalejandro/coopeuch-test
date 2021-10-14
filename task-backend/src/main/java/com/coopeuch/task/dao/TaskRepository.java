/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.coopeuch.task.dao;

import com.coopeuch.task.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
/**
 *
 * @author romerd
 */
public interface TaskRepository extends JpaRepository<Task, Long> {}
