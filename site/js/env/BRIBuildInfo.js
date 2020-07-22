'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-22 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-1636';
    this._commitGIT = 'a479d5280f4605e110ba7a71fd94ec2fe50971fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}