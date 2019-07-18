<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Traces
 *
 * @author PFS
 */
include_once('../BRIEnvt/BRIBRIEnvt.php');

class BRILogger {
    public $_FilePath = null;
    public $_Prefix = null;

    function __construct($prefix = 'inconnu') {
        $pathForLog = $_SERVER['DOCUMENT_ROOT'] . 'NewPlouf/Dev/php/traces';
        // $this->_FilePath = BRIEnvt::DEBUGtraceFILE . BRIEnvt::SiteName . BRIEnvt::tracePATHTODISK;
        $this->_FilePath = $pathForLog;
        $this->_Prefix = $prefix;
        try {
            if (!file_exists($this->_FilePath)) {
                $res = mkdir($this->_FilePath, 0777, TRUE);
            }
        }
        catch (Exception $e) {
            echo 'Exception reçue : ',  $e->getMessage(), "\n";
            echo 'mkdir KO of : '.$this->_FilePath;
        }
        $this->_FilePath = $this->_FilePath .'/'.BRIEnvt::traceFILE;
    }

    public function prefix($prefix) {
        $this->_Prefix = $prefix;
        return;
    }

    public function DebugTraceTableau($Message, $Tab, $level) {
        $s = BRITools::arrayToString($Tab);
        $this->DebugTrace($Message . "  " . $s, $level);
        return;
    }

    public function DebugTrace($Message, $level) {
        $TraceLevel = BRIEnvt::getDebugLevel();

        if ($TraceLevel <= $level) {
            $pipo = date('d/m/Y-H:i:s');
            $pipo .= ' # '.$this->_Prefix;
            $logMsg = "[" . $pipo . "] " . $Message . "\n";

            try {
                $filePointer = fopen($this->_FilePath, "a");
                if (flock ($filePointer, LOCK_EX)) {
                    fputs ($filePointer, $logMsg);
                    fflush ($filePointer);
                    flock($filePointer, LOCK_UN);
                }
                fclose($filePointer);
                // print ($logMsg);
            }
            catch (Exception $e) {
                echo 'Exception reçue : ',  $e->getMessage(), "\n";
                echo 'mkdir KO of : '.$this->_FilePath;
            }
        }
        return;
    }

    public function log($Message) {
        return $this->DebugTrace($Message, BRIEnvt::_INFO);
    }

    public function debug($Message) {
        return $this->DebugTrace($Message, BRIEnvt::_DEBUG);
    }

    public function debugTab($Message, $anArray) {
        return $this->DebugTraceTableau($Message, $anArray, BRIEnvt::_DEBUG);
    }

    public function fatal($Message) {
        return $this->DebugTrace($Message, BRIEnvt::_FATAL);
    }

}
