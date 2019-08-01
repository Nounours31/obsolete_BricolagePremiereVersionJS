'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-01 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-213';
    this._commitGIT = '49ee90b1b01962ceb90ef9d6ea19b88dd438d4d3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}