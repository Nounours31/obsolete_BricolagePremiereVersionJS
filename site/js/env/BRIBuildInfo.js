'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-17 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1497';
    this._commitGIT = '43d0a2ebcaaf4a88a23770437b3c562662d0be3b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}