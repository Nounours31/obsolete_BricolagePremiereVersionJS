'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-09 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1951';
    this._commitGIT = '00112431617f07f83d5cc7d3d75f36477ec67d43';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}