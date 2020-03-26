'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-26 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1163';
    this._commitGIT = '9bd6735153391750df4e713c310fbede4a9c1bd6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}