<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of DBFileManagement
 *
 * @author PFS
 */

    
class BRIFileManagementWithDBLink {
    private $_logger = null;
    public function __construct() {
        $this -> _logger = new Traces('DBFileManagement');
    }
    
    public function __destruct() {
    }
    
    public function copyCACIOnServer ($uid, $filename, $filepath) {
        $this -> _logger -> debug ('Parse du fichier '.$filename);
        $pathToSite = ENVT::getSitePath();
            
        $relativePath = ENVT::CACIPATHTODISK.$uid.'/'.date('Y-m-d_H-i-s').'/';            
        $pathToCACI = $pathToSite.$relativePath;
        mkdir ($pathToCACI, 0777, TRUE);
        
        $s = new cSanitize();
        $relativePath .= $s->sanitize_filename_string($filename);
        
        $pathToCACIFile = $pathToSite.$relativePath;
        
        $this -> _logger -> debug ('Copy -->'.$filepath.'<-- to -->'.$pathToCACIFile.'<--');
        copy ($filepath, $pathToCACIFile);
        return $relativePath;
    }
}
