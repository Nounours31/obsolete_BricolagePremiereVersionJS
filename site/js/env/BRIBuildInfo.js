'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-02 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1436';
    this._commitGIT = 'eea130da2d647957fa39d49a582e3abf1c29e35d';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}