'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-07 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-847';
    this._commitGIT = '290571641c1056a2f26fed4a316991e44591ba64';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}