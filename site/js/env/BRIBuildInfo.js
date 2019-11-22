'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-22 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-665';
    this._commitGIT = 'b879813642d1cab30addd7c538eddf0ee00d38a7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}