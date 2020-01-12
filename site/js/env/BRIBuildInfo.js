'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-12 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-869';
    this._commitGIT = '39169086aefca2213f5e9c79f46970950a969447';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}