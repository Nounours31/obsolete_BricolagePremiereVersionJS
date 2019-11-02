'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-02 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-586';
    this._commitGIT = 'a3bd2647bae25b0a35cc60e19d68f55e3e7eb86e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}