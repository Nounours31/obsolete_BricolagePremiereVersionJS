'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-23 12:00:12';
    this._versionBuild = 'jenkins-Bricolage-1520';
    this._commitGIT = 'bedba5152e12124b96211fe85af7a98062b42e25';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}