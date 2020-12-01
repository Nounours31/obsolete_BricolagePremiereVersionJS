'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-01 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2165';
    this._commitGIT = '1f956a90c2d8c97d60ec8b53ee7fef41417000a3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}