'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-10 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2079';
    this._commitGIT = 'f15014d7c8c10910a82133dd35a77813cf0c3a2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}