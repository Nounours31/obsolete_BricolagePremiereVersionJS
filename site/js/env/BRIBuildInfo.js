'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-22 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1394';
    this._commitGIT = '535b91faebe7e8d3937097edaa4072d0af5af1fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}