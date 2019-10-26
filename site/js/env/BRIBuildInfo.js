'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-26 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-558';
    this._commitGIT = '09bc4930608e1632da22bed06800b8e75f396152';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}