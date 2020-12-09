'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-09 08:00:08';
    this._versionBuild = 'jenkins-Bricolage-2195';
    this._commitGIT = 'a722682133b41b19e08c76de59acd9bbcb83629b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}