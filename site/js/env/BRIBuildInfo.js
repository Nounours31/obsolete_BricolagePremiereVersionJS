'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-27 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-318';
    this._commitGIT = '5d8fd8de19bcdfaf668a5c3882abbadec5481ff0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}