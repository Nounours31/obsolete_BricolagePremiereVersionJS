'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-06 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1942';
    this._commitGIT = 'cd75099ba1bb1f37f06767333a89260cfcc63c23';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}